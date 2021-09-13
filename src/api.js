export default class API {
  constructor(api) {
    this.api = api;
  }
  async getCharacter(id) {
    try {
      const response = await fetch(`${this.api}${id}`);
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}
