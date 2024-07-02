export class LoginDto {
   email!: string;
   password!: string;
}

export class SignUpDto {
   username!: string;
   email!: string;
   firstName!: string;
   lastName!: string;
   middleName?: string;
   password!: string;
}