import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../contact.model';
import { NgForm } from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-edit',
  standalone: false,

  templateUrl: './contact-edit.component.html',
  styleUrl: './contact-edit.component.css',
})
export class ContactEditComponent implements OnInit {
  contact: Contact | null = null;
  originalContact: Contact | null = null;
  editMode = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactService: ContactService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.originalContact = this.contactService.getContact(id);
        if (this.originalContact) {
          this.contact = { ...this.originalContact };
          this.editMode = true;
        }
      }
    });
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newContact = new Contact(
      '',
      value.name,
      value.email,
      value.phone,
      value.imageUrl,
      []
    );

    if (this.editMode && this.originalContact) {
      this.contactService.updateContact(this.originalContact, newContact);
    } else {
      this.contactService.addContact(newContact);
    }

    this.router.navigate(['/contacts']);
  }

  onCancel() {
    this.router.navigate(['/contacts']);
  }
}
