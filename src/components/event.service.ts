import { Component } from '@nestjs/common';
import { HttpException } from '@nestjs/core';
import { getEntityManager } from "typeorm";
import { Event } from "../entities/event.entity";
var Guid = require("guid");

@Component()
export class EventsService {
    
    async getAllEvents() {
         // get a event repository to perform operations with event
        const eventRepository = getEntityManager().getRepository(Event);
    
        // load a event by a given event id
        const events = await eventRepository.find();
        
        return Promise.resolve(events);
    }

    async getEvent(id: string) {
        // get a event repository to perform operations with event
        const eventRepository = getEntityManager().getRepository(Event);

        const event = await eventRepository.findOneById(id);
        if (!event) {
            throw new HttpException("Event not found", 404);
        }
        return Promise.resolve(event);
    }
    
    async addEvent(eventBody: any) {
        const eventRepository = getEntityManager().getRepository(Event);
        
        let event = new Event();
        event.id = Guid.create().value;
        event.date = eventBody.date;
        event.description = eventBody.description;

        let savedevent = await eventRepository.persist(event);

        return Promise.resolve(savedevent);
    }

    async editEvent(id: string, eventBody: any) {
        const eventRepository = getEntityManager().getRepository(Event);
        
        const event = await eventRepository.findOneById(id);
        
        event.date = eventBody.date;
        event.description = eventBody.description;

        let savedevent = await eventRepository.persist(event);

        return Promise.resolve(savedevent);
    }

    async deleteEvent(id: string) {
        const eventRepository = getEntityManager().getRepository(Event);
        const event = await eventRepository.findOneById(id);

        if (!event) {
            throw new HttpException("Event not found", 404);
        }

        let savedevent = await eventRepository.remove(event);

        return Promise.resolve();
    }
}