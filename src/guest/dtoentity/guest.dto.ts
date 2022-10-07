import { IsNotEmpty } from 'class-validator';
import { IsEnum, IsString } from 'class-validator';
import { Gender, Status } from './guest.entity';

export class createGuests {
  @IsString()
  @IsNotEmpty()
  FullName: string;

  @IsString()
  @IsNotEmpty()
  NoHp: string;

  @IsString()
  @IsNotEmpty()
  Alamat: string;

  @IsEnum(Gender)
  @IsNotEmpty()
  JenisKelamin: Gender;

  @IsEnum(Status)
  @IsNotEmpty()
  Status: Status;

  @IsString()
  @IsNotEmpty()
  TujuanKunjungan: string;
}

export class updateGuests {
  @IsString()
  @IsNotEmpty()
  FullName: string;

  @IsString()
  @IsNotEmpty()
  NoHp: string;

  @IsString()
  @IsNotEmpty()
  Alamat: string;

  @IsEnum(Gender)
  @IsNotEmpty()
  JenisKelamin: Gender;

  @IsEnum(Status)
  @IsNotEmpty()
  Status: Status;

  @IsString()
  @IsNotEmpty()
  TujuanKunjungan: string;
}
