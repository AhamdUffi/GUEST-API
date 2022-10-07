import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { v4 as uuid } from 'uuid';
import { getFilter } from './dtoentity/get.filter.dto';
import { createGuests, updateGuests } from './dtoentity/guest.dto';
import { Guests } from './dtoentity/guest.entity';

@Injectable()
export class GuestService {
  private guest: Guests[] = [];

  getAll() {
    return this.guest;
  }

  getById(id: string) {
    let getid = this.guest.find((get) => get.id === id);
    if (!id) {
      throw new NotFoundException('id not found');
    }
    return getid;
  }

  async getByFilter(dto: getFilter) {
    const { Status, JenisKelamin } = dto;
    let cari = this.getAll();

    if (Status) {
      return await cari.filter((cari) => cari.Status === Status);
    }

    if (JenisKelamin) {
      return await cari.filter((cari) => cari.JenisKelamin === JenisKelamin);
    }
    return cari;
  }

  create(create: createGuests) {
    let newGuest = {
      id: uuid(),
      FullName: create.FullName,
      NoHp: create.NoHp,
      Alamat: create.Alamat,
      JenisKelamin: create.JenisKelamin,
      Status: create.Status,
      TujuanKunjungan: create.TujuanKunjungan,
    };

    this.guest.push(newGuest);
    return newGuest;
  }

  delete(id: string) {
    let index = this.guest.findIndex((student) => student.id === id);
    if (index < 0) {
      throw new NotFoundException('ID not found');
    }
    this.guest.splice(index, 1);
  }

  update(id: string, update: updateGuests) {
    let newUpdate = this.getById(id);
    if (!id) {
      throw new NotFoundException('id not found');
    }
    newUpdate.FullName = update.FullName;
    newUpdate.NoHp = update.NoHp;
    newUpdate.Alamat = update.Alamat;
    newUpdate.JenisKelamin = update.JenisKelamin;
    newUpdate.Status = update.Status;
    newUpdate.TujuanKunjungan = update.TujuanKunjungan;
    return newUpdate;
  }
}
