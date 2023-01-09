export async function userApi(qntd_pag: string) {
  const url: string = `https://randomuser.me/api/?nat=br&results=${qntd_pag}&seed=abc`;
  try {
    const date = await fetch(url);
    return date.json();
  } catch (error) {
    console.log(error);
  }
}
