import { RefObject } from "react";
import gsap from "gsap";

interface AnimationOptions {
    speed?: number;
    autoPlay?: boolean;
    repeat?: number;
    delay?: number;
    stagger?: number;
    ease?: string;
    repeatDelay?: number;
}

export const Options = (options: AnimationOptions) => {
    return {
        ...options,
        speed: options.speed || 1,
        autoPlay: options.autoPlay || true,
        repeat: options.repeat || 1,
        delay: options.delay || 0.5,
        stagger: options.stagger || 0.1,
        ease: options.ease || "linear",
        repeatDelay: options.repeatDelay || 0.5,
    };
};

export const defaultOptions = Options({
    speed: 1,
    autoPlay: true,
    repeat: 1,
    delay: 0.5,
    stagger: 0.1,
    ease: "linear",
    repeatDelay: 0.5,
});

export const splitTextIntoWords = (element: HTMLElement) => {
    const text = element.textContent || "";
    element.innerHTML = "";

    // Match words and spaces separately
    const tokens = text.match(/\S+|\s+/g) || [];

    return tokens.map((token) => {
        const span = document.createElement("span");
        span.textContent = token;
        span.style.display = "inline-block";
        span.classList.add("word");

        // Add spacing only for actual words, not for whitespace
        if (!/^\s+$/.test(token)) {
            span.style.marginRight = "0.25em";
        }

        element.appendChild(span);
        return span;
    });
};

// Split text into characters
export const splitTextIntoChars = (element: HTMLElement) => {
    const text = element.textContent || "";
    element.innerHTML = "";

    return text.split("").map((char) => {
        const span = document.createElement("span");
        span.textContent = char === " " ? "\u00A0" : char;
        span.style.display = "inline-block";
        span.classList.add("char");
        element.appendChild(span);
        return span;
    });
};

const fadeAnimation_v1 = (
    element: HTMLElement,
    timelineRef: RefObject<gsap.core.Timeline | null>
) => {
    // Kill any existing animations on this element
    gsap.killTweensOf(element);

    // Reset element state
    gsap.set(element, { opacity: 1, scale: 1, x: 0, y: 0 });

    // Create fade animation
    timelineRef.current = gsap.timeline();
    timelineRef.current
        .to(element, {
            opacity: 0,
            duration: 0.5,
            ease: "power2.inOut",
        })
        .to(element, {
            opacity: 1,
            duration: 0.5,
            ease: "power2.inOut",
        });
};

const scaleAnimation_v1 = (
    element: HTMLElement,
    timelineRef: RefObject<gsap.core.Timeline | null>
) => {
    // Kill any existing animations on this element
    gsap.killTweensOf(element);

    // Reset element state
    gsap.set(element, { opacity: 1, scale: 1, x: 0, y: 0 });

    // Create scale animation
    timelineRef.current = gsap.timeline();
    timelineRef.current
        .to(element, {
            scale: 1.5,
            duration: 0.3,
            ease: "back.out(1.7)",
        })
        .to(element, {
            scale: 0.8,
            duration: 0.2,
            ease: "power2.inOut",
        })
        .to(element, {
            scale: 1,
            duration: 0.3,
            ease: "elastic.out(1, 0.5)",
        });
};

const slideAnimation_v1 = (
    element: HTMLElement,
    timelineRef: RefObject<gsap.core.Timeline | null>
) => {
    // Kill any existing animations on this element
    gsap.killTweensOf(element);

    // Reset element state
    gsap.set(element, { opacity: 1, scale: 1, x: 0, y: 0 });

    // Create slide animation
    timelineRef.current = gsap.timeline();
    timelineRef.current
        .to(element, {
            x: 100,
            duration: 0.4,
            ease: "power2.out",
        })
        .to(element, {
            x: -100,
            duration: 0.4,
            ease: "power2.inOut",
        })
        .to(element, {
            x: 0,
            duration: 0.4,
            ease: "back.out(1.7)",
        });
};

const slideUpwords_v1 = (
    element: HTMLElement,
    timelineRef: RefObject<gsap.core.Timeline | null>
) => {
    // Kill any existing animations on this element
    gsap.killTweensOf(element);
    const tl = timelineRef.current ? timelineRef.current : gsap.timeline();
    const words = splitTextIntoWords(element);
    gsap.set(words, { y: 30, opacity: 0 });
    tl.to(words, {
        duration: 0.6 / defaultOptions.speed,
        ease: defaultOptions.ease,
        stagger: defaultOptions.stagger,
        y: 0,
        opacity: 1,
    });
};

const scaleBounceWords_v1 = (
    element: HTMLElement,
    timelineRef: RefObject<gsap.core.Timeline | null>
) => {
    gsap.killTweensOf(element);
    const words = splitTextIntoWords(element);
    const tl = timelineRef.current ? timelineRef.current : gsap.timeline();
    gsap.set(words, { scale: 0, opacity: 0 });
    tl.to(words, {
        duration: 0.5 / defaultOptions.speed,
        scale: 1,
        opacity: 1,
        ease: "back.out(1.7)",
        stagger: defaultOptions.stagger,
    });
};

const rotateFlipWords_v1 = (
    element: HTMLElement,
    timelineRef: RefObject<gsap.core.Timeline | null>
) => {
    gsap.killTweensOf(element);
    const tl = timelineRef.current ? timelineRef.current : gsap.timeline();
    const words = splitTextIntoWords(element);
    gsap.set(words, {
        rotationX: -90,
        opacity: 0,
        transformOrigin: "center bottom",
    });
    tl.to(words, {
        duration: 0.7 / defaultOptions.speed,
        rotationX: 0,
        opacity: 1,
        ease: defaultOptions.ease,
        stagger: defaultOptions.stagger,
    });
};

const slideAlternateWords_v1 = (
    element: HTMLElement,
    timelineRef: RefObject<gsap.core.Timeline | null>
) => {
    gsap.killTweensOf(element);
    const words = splitTextIntoWords(element);
    words.forEach((word, index) => {
        gsap.set(word, {
            x: index % 2 === 0 ? -50 : 50,
            opacity: 0,
        });
    });
    timelineRef.current?.to(words, {
        duration: 0.6 / defaultOptions.speed,
        x: 0,
        opacity: 1,
        ease: defaultOptions.ease,
        stagger: defaultOptions.stagger,
    });
};

const pushUpWords_v1 = (
    element: HTMLElement,
    timelineRef: RefObject<gsap.core.Timeline | null>
) => {
    gsap.killTweensOf(element);
    const words = splitTextIntoWords(element);
    gsap.set(words, { y: "100%", opacity: 0 });
    timelineRef.current?.to(words, {
        duration: 0.5 / defaultOptions.speed,
        y: "0%",
        opacity: 1,
        ease: "power3.out",
        stagger: defaultOptions.stagger,
    });
};

const fadeCascadeWords_v1 = (
    element: HTMLElement,
    timelineRef: RefObject<gsap.core.Timeline | null>
) => {
    gsap.killTweensOf(element);
    const tl = timelineRef.current ? timelineRef.current : gsap.timeline();
    const words = splitTextIntoWords(element);
    gsap.set(words, { opacity: 0 });
    tl.to(words, {
        duration: 0.4 / defaultOptions.speed,
        opacity: 1,
        ease: "power1.out",
        stagger: defaultOptions.stagger,
    });
};

const layeredSlideReveal_v1 = (
    element: HTMLElement,
    timelineRef: RefObject<gsap.core.Timeline | null>
) => {
    gsap.killTweensOf(element);
    const tl = timelineRef.current ? timelineRef.current : gsap.timeline();
    const words = splitTextIntoWords(element);
    words.forEach((word, index) => {
        gsap.set(word, {
            x: -200,
            opacity: 0.3,
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: words.length - index,
            filter: "blur(2px)",
        });
    });

    tl.to(words, {
        duration: 0.8 / defaultOptions.speed,
        x: 0,
        ease: "power2.out",
        stagger: defaultOptions.stagger,
    })
        .to(
            words,
            {
                duration: 0.4 / defaultOptions.speed,
                opacity: 1,
                filter: "blur(0px)",
                ease: "power2.out",
                stagger: defaultOptions.stagger * 0.8,
            },
            "-=0.3"
        )
        .to(
            words,
            {
                duration: 0.6 / defaultOptions.speed,
                position: "relative",
                left: "auto",
                top: "auto",
                transform: "none",
                x: 0,
                ease: "power2.out",
                stagger: defaultOptions.stagger * 0.5,
            },
            "-=0.2"
        );
};

const scrambleGlitch_v1 = (
    element: HTMLElement,
    timelineRef: RefObject<gsap.core.Timeline | null>
) => {
    const chars = splitTextIntoChars(element);
    const originalChars = chars.map((char) => char.textContent);
    const scrambleChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
    gsap.killTweensOf(element);
    const tl = timelineRef.current ? timelineRef.current : gsap.timeline();
    chars.forEach((char, index) => {
        if (char.textContent === "\u00A0") return;
        tl.to(
            char,
            {
                duration: 0.05 / defaultOptions.speed,
                repeat: 8,
                ease: "none",
                onRepeat: () => {
                    char.textContent =
                        scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
                },
                onComplete: () => {
                    char.textContent = originalChars[index];
                },
            },
            index * defaultOptions.stagger
        );
    });
    return tl;
};

const scatterExplode_v1 = (
    element: HTMLElement,
    timelineRef: RefObject<gsap.core.Timeline | null>
) => {
    gsap.killTweensOf(element);
    const chars = splitTextIntoChars(element);
    gsap.set(chars, {
        x: () => gsap.utils.random(-200, 200),
        y: () => gsap.utils.random(-200, 200),
        rotation: () => gsap.utils.random(-180, 180),
        opacity: 0,
        scale: 0,
    });

    timelineRef.current?.to(chars, {
        duration: 0.8 / defaultOptions.speed,
        x: 0,
        y: 0,
        rotation: 0,
        opacity: 1,
        scale: 1,
        ease: "back.out(1.7)",
        stagger: defaultOptions.stagger * 0.5,
    });
};

const waveRipple_v1 = (
    element: HTMLElement,
    timelineRef: RefObject<gsap.core.Timeline | null>
) => {
    gsap.killTweensOf(element);
    const chars = splitTextIntoChars(element);
    gsap.set(chars, { y: 50, opacity: 0 });
    const tl = timelineRef.current ? timelineRef.current : gsap.timeline();
    tl.to(chars, {
        duration: 0.6 / defaultOptions.speed,
        y: 0,
        opacity: 1,
        ease: "elastic.out(1, 0.3)",
        stagger: defaultOptions.stagger,
    })
        .to(
            chars,
            {
                duration: 0.3 / defaultOptions.speed,
                y: -10,
                ease: "power2.out",
                stagger: defaultOptions.stagger * 0.6,
            },
            "-=0.3"
        )
        .to(chars, {
            duration: 0.4 / defaultOptions.speed,
            y: 0,
            ease: "bounce.out",
            stagger: defaultOptions.stagger * 0.3,
        });
};

const typewriterBounce_v1 = (
    element: HTMLElement,
    timelineRef: RefObject<gsap.core.Timeline | null>
) => {
    gsap.killTweensOf(element);
    const chars = splitTextIntoChars(element);
    const tl = timelineRef.current ? timelineRef.current : gsap.timeline();
    gsap.set(chars, { opacity: 0, scale: 0, y: 20 });
    chars.forEach((char, index) => {
        tl.to(
            char,
            {
                duration: 0.1 / defaultOptions.speed,
                opacity: 1,
                scale: 1.2,
                y: 0,
                ease: "back.out(1.7)",
            },
            index * defaultOptions.stagger
        ).to(
            char,
            {
                duration: 0.1 / defaultOptions.speed,
                scale: 1,
                ease: "power2.out",
            },
            index * defaultOptions.stagger + 0.1
        );
    });
};

const matrixStyle_v1 = (
    element: HTMLElement,
    timelineRef: RefObject<gsap.core.Timeline | null>
) => {
    gsap.killTweensOf(element);
    const chars = splitTextIntoChars(element);
    gsap.set(chars, {
        opacity: 0,
        filter: "blur(10px)",
    });
    const tl = timelineRef.current ? timelineRef.current : gsap.timeline();
    tl.to(chars, {
        duration: 0.1 / defaultOptions.speed,
        opacity: 1,
        stagger: defaultOptions.stagger * 0.5,
    })
        .to(chars, {
            duration: 0.5 / defaultOptions.speed,
            filter: "blur(0px)",
            ease: "power2.out",
            stagger: defaultOptions.stagger * 0.3,
        })
        .to(
            chars,
            {
                duration: 0.2 / defaultOptions.speed,
                scale: 1.1,
                ease: "power2.inOut",
                stagger: defaultOptions.stagger * 0.2,
            },
            "-=0.3"
        )
        .to(chars, {
            duration: 0.3 / defaultOptions.speed,
            scale: 1,
            ease: "elastic.out(1, 0.3)",
            stagger: defaultOptions.stagger * 0.2,
        });
};

export const Animation_store = {
    slideAnimation_v1,
    fadeAnimation_v1,
    scaleAnimation_v1,
    slideUpwords_v1,
    scaleBounceWords_v1,
    rotateFlipWords_v1,
    slideAlternateWords_v1,
    pushUpWords_v1,
    fadeCascadeWords_v1,
    layeredSlideReveal_v1,
    scrambleGlitch_v1,
    scatterExplode_v1,
    waveRipple_v1,
    typewriterBounce_v1,
    matrixStyle_v1,
};
