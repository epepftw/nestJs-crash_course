import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
// import { Request,Response } from 'express';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';


@Controller('items')
export class ItemsController {

    constructor(private readonly _items : ItemsService){

    }


    @Get()
    findall(): Promise<Item[]> {
        return this._items.findAll();
    }

    @Get(':id')
    findOnd(@Param('id') id): Promise<Item> {
        return this._items.findOne(id);
    }

    @Post()
    create(@Body() createItemDto : CreateItemDto): Promise<Item>{
        return this._items.create(createItemDto);
    }

    @Delete(':id')
    delete(@Param('id') id): Promise<Item>{
        return this._items.delete(id);
    }

    @Put(':id')
    update(@Body() updateItemDto: CreateItemDto, @Param('id') id):Promise<Item> {
        return this._items.update(id, updateItemDto)
    }
 }
