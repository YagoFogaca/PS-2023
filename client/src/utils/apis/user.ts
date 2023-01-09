export async function userApi() {
  const url: string = 'https://randomuser.me/api/?nat=br&results=10&seed=abc';
  try {
    const date = await fetch(url);
    return date.json();
  } catch (error) {
    console.log(error);
  }
}
