package com.lv.contatsbook.controllers;

import com.lv.contatsbook.models.Contacts;
import com.lv.contatsbook.services.ContactsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/contacts")
@CrossOrigin
public class ContactsController {
    @Autowired
    private ContactsService contactsService;

    @GetMapping("/all")
    public List<Contacts> getAllContacts() {
        return contactsService.getContacts();
    }

    @PostMapping("/add")
    public List<Contacts> addContact(@RequestBody Contacts contact) {
        return contactsService.addContact(contact);
    }

    @PutMapping("/update")
    public List<Contacts> updateContact(@RequestBody Contacts contact) {
        return contactsService.updateContact(contact);
    }

    @DeleteMapping("/delete")
    public List<Contacts> deleteContact(@RequestBody Contacts contact) {
        return this.contactsService.deleteContact(contact);
    }
}
