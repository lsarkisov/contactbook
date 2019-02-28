package com.lv.contatsbook.services;

import com.lv.contatsbook.models.Contacts;
import com.lv.contatsbook.repository.ContactsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class ContactsService {
    @Autowired
    private ContactsRepository contactsRepository;

    public List<Contacts> getContacts() {
        return this.contactsRepository.findAll();
    }

    public List<Contacts> addContact(Contacts contact) {
        contactsRepository.save(contact);
        return this.contactsRepository.findAll();
    }

    public List<Contacts> updateContact(Contacts contact) {
        this.contactsRepository.save(contact);
        return this.contactsRepository.findAll();
    }

    public List<Contacts> deleteContact(Contacts contact) {
        this.contactsRepository.delete(contact);
        return this.contactsRepository.findAll();
    }
}
