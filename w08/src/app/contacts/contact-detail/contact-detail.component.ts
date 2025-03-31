import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { WindRefService } from '../../wind-ref.service';

@Component({
  selector: 'app-contact-detail',
  standalone: false,
  templateUrl: './contact-detail.component.html',
  styleUrl: './contact-detail.component.css',
})
export class ContactDetailComponent implements OnInit {
  contact: Contact | null = null;
  nativeWindow: any;

  constructor(
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute,
    private windowRefService: WindRefService
  ) {
    this.nativeWindow = this.windowRefService.getNativeWindow();
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        const foundContact = this.contactService.getContact(id);
        if (foundContact) {
          this.contact = JSON.parse(JSON.stringify(foundContact));
        }
      }
    });
  }

  onDelete() {
    if (confirm('Are you sure you want to delete this contact?')) {
      if (this.contact) {
        this.contactService.deleteContact(this.contact);
      }
      this.router.navigateByUrl('/contacts');
    }
  }
}
