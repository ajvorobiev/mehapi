import { Controller, Get, Post, HttpStatus, Put, Delete } from '@nestjs/common';
import { Response, Param, Dependencies, Body } from '@nestjs/common';
import { EventsService } from "../components/event.service";
import { Event } from "../entities/event.entity";
import { JSendSuccess } from "../jsend/jsend-success";

@Controller('event')
export class EventController {

    constructor(private eventsService: EventsService) {
        
    }

    @Get()
    async getAllEvents(@Response() res) {
        const events = await this.eventsService.getAllEvents(); 
        res.status(HttpStatus.OK).json(new JSendSuccess({"events": events }));
    }

    @Get('/:id')
    async getEvent(@Response() res, @Param('id') id) {
        const event = await this.eventsService.getEvent(id);
        res.status(HttpStatus.OK).json(new JSendSuccess({"event": event }));
    }

    @Post()
    async addEvent(@Response() res, @Body('event') event) {
    
        const msg = await this.eventsService.addEvent(event);
        res.status(HttpStatus.CREATED).json(new JSendSuccess({"event": msg }));
    }

    @Put('/:id')
    async editEvent(@Response() res, @Body('event') event, @Param('id') id) {
        const msg = await this.eventsService.editEvent(id, event);
        res.status(HttpStatus.OK).json(new JSendSuccess({"event": msg }));
    }

    @Delete('/:id')
    async deleteEvent(@Response() res, @Param('id') id) {
        const msg = await this.eventsService.deleteEvent(id);
        res.status(HttpStatus.OK).json(new JSendSuccess({"event": msg }));
    }
}