import { IsEnum, isEnum, IsOptional } from 'class-validator';
import { Gender, Status } from './guest.entity';

export class getFilter {
  @IsEnum(Status)
  @IsOptional()
  Status?: Status;

  @IsEnum(Gender)
  @IsOptional()
  JenisKelamin?: Gender;
}
