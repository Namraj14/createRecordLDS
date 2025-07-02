
# 📘 Create Lead using createRecord() in LWC

This project shows how to create a **Lead** record in Salesforce using **createRecord()** in LWC, without Apex.

## 💡 What is createRecord()?

- It's a built-in Salesforce method from `lightning/uiRecordApi`.
- It lets you create records like Lead, Contact, or custom objects using JavaScript.

## ✅ Required Parameters

You must pass an object with:

```
const recordInput = {
  apiName: 'Lead',         // Name of the object (like 'Lead' or 'Contact')
  fields: {                // Field values you want to save
    FirstName: 'John',
    LastName: 'Doe',
    Company: 'OpenAI'
  }
}
```

Then call:
```js
createRecord(recordInput)
```

## 🛠️ What’s in this Project

- An input form to enter First Name, Last Name, and Company
- A button to create the Lead
- Shows the created record ID

## 📄 File Overview

- `createLeadLDS.html`: Form UI with input fields and button
- `createLeadLDS.js`: Handles input and calls createRecord()
- `createLeadLDS.js-meta.xml`: Makes the component available

## 🧠 Key Terms

| Term       | Meaning |
|------------|--------|
| `apiName`  | Object name like `'Lead'`, `'Account'`, or `'Custom_Object__c'` |
| `fields`   | Key-value pairs of field API names and their values |
| `recordInput` | Just a variable (you can name it anything) |

## 🔍 Example with Custom Object

```js
const recordInput = {
  apiName: 'Job__c',
  fields: {
    Name: 'Developer',
    Status__c: 'Applied'
  }
};
createRecord(recordInput);
```

## 📚 Learn More

- [Salesforce Docs](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.reference_create_record)

---
