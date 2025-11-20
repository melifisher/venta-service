import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Producto } from './entities/producto.entity';

@Injectable()
export class ProductosService {
  private productos: Producto[] = [];
  private id = 1;

  create(dto: CreateProductoDto) {
    const nuevo: Producto = { id: this.id++, ...dto };
    this.productos.push(nuevo);
    return nuevo;
  }

  findAll() {
    return this.productos;
  }

  findOne(id: number) {
    const p = this.productos.find(x => x.id === id);
    if (!p) throw new NotFoundException('Producto no encontrado');
    return p;
  }

  update(id: number, dto: UpdateProductoDto) {
    const p = this.findOne(id);
    Object.assign(p, dto);
    return p;
  }

  remove(id: number) {
    const i = this.productos.findIndex(x => x.id === id);
    if (i === -1) throw new NotFoundException('Producto no encontrado');
    const deleted = this.productos[i];
    this.productos.splice(i, 1);
    return deleted;
  }
}
