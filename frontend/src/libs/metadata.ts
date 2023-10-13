import { endpoint_metadata } from '@/utils/endpoint'

export async function getMetaData() {
  const response = await fetch(`${endpoint_metadata}/metadata`,{
    method: "GET",
    cache:"no-cache"
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
}