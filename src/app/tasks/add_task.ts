export class Add_task {

  name: string;
  details: string;
  date: string;
  constructor(values: Object = {}) {
    //Constructor initialization
    Object.assign(this, values);
  }
}
