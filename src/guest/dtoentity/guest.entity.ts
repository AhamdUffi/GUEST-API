export class Guests {
  id: string;
  FullName: string;
  NoHp: string;
  Alamat: string;
  JenisKelamin: Gender;
  Status: Status;
  TujuanKunjungan: string;
}

export enum Gender {
  PRIA = 'PRIA',
  WANITA = 'WANITA',
}

export enum Status {
  PEGAWAI = 'PEGAWAI',
  NON_PEGAWAI = 'NON_PEGAWAI',
}
