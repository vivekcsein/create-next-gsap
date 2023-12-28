import gsap from "gsap";
type configFade = {
    duration?: number;
}
type targetElement = HTMLDivElement;

export const fade = {
    name: "fade",
    defaults: { duration: 2 },
    extendTimeline: true,
    effect: (targets: targetElement, config: configFade) => {
        return gsap.to(targets, { duration: config.duration, opacity: 0, ...config });
    },
};

export interface ConfigSplitEffect {
    duration: number;
}

export interface Splits {
    chars: HTMLElement[];
}

export const spliteffect = {
    name: "scrambleSplit",
    extendTimeline: true,
    defaults: { duration: 1 },
    effect(splits: Splits[], config: ConfigSplitEffect) {
        let tl = gsap.timeline();
        splits.forEach(split => {
            let proxy = document.createElement("div"),
                chars = split.chars,
                l = chars.length;
            proxy.innerText = split.chars.map(e => e.innerText).join("");
            tl.add(gsap.to(proxy, config).eventCallback("onUpdate", () => {
                let i = l;
                while (i--) {
                    chars[i].innerText = proxy.innerText.charAt(i);
                }
            }), 0);
        });
        return tl;
    }
};

export const scrollTriggerTimeline = (item: HTMLDivElement, offset: string | number) => {

    return {
        trigger: item,
        markers: {
            startColor: "blue",
            endColor: "white",
            fontSize: "40px",
            indent: 20,
        },
        pin: true,
        scrub: 1,
        end: () => `+=` + offset,
    }
}