import { createRecord } from 'lightning/uiRecordApi';
import { LightningElement, track } from 'lwc';

export default class CreatedRecordLDS extends LightningElement {

    @track firstName = '';
    @track lastName = '';
    @track email = '';
    @track company = '';
    leadId;

    @track recordCreated = false;

    handleFirstNameChange(event) {
        this.firstName = event.target.value;
    }

    handleLastNameChange(event) {
        this.lastName = event.target.value;
    }

    handleEmailChange(event) {
        this.email = event.target.value;
    }

    handleCompanyChange(event) {
        this.company = event.target.value;
    }

    createLead() {
        const fields = {
            FirstName: this.firstName,
            LastName: this.lastName,
            Email: this.email,
            Company: this.company
        }

        const recordInput = {
            apiName: 'Lead',
            fields
        }

        createRecord(recordInput)
            .then(result => {
                this.leadId = result.id;
                console.log('Lead created: ' + result.id);
                this.recordCreated = !this.recordCreated;
            })
            .catch(error => {
                 console.error('Error creating lead: ', error.body.message);
            }
            )
    }
}

