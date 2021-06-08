export class User {
  constructor (
    public id: number = 0,
    public givenName: String = '',
    public lastName: String = '',
    public email: string = '',
    public password: string = '',
    public birthDate: any = new Date(),
    public birthDateForm: any = new Date(),
    public status: number = 1,
    public type: any = 2
  ) {}
}
