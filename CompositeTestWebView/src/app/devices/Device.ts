export class Device {
  constructor(
    public _id: string,
    public name: string,
    public type: string,
    public desc: string,
    public capType: string,
    public brokerurl: string,
    public image: string,
  ) {
  }
}
