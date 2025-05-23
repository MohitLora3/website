// Simple in-memory storage for demo purposes
// In a real app, this would be a database

type ContactSubmission = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  date: Date;
};

type NewsletterSubscription = {
  id: string;
  email: string;
  source?: string;
  date: Date;
};

class Storage {
  private contactSubmissions: ContactSubmission[] = [];
  private demoRequests: any[] = [];
  private solutionRequests: any[] = [];
  private newsletterSubscriptions: NewsletterSubscription[] = [];
  
  // Getter methods to access stored data
  getContactSubmissions() {
    return this.contactSubmissions;
  }
  
  getDemoRequests() {
    return this.demoRequests;
  }
  
  getSolutionRequests() {
    return this.solutionRequests;
  }
  
  getNewsletterSubscriptions() {
    return this.newsletterSubscriptions;
  }

  async createContactSubmission(data: Omit<ContactSubmission, 'id' | 'date'>) {
    const submission = {
      ...data,
      id: Math.random().toString(36).substring(2, 15),
      date: new Date()
    };

    this.contactSubmissions.push(submission);
    console.log('New contact submission:', submission);
    return submission;
  }

  async createNewsletterSubscription(data: Omit<NewsletterSubscription, 'id' | 'date'>) {
    // Check if email already exists to prevent duplicates
    const existingSubscription = this.newsletterSubscriptions.find(
      sub => sub.email === data.email
    );

    if (existingSubscription) {
      return existingSubscription;
    }

    const subscription = {
      ...data,
      id: Math.random().toString(36).substring(2, 15),
      date: new Date()
    };

    this.newsletterSubscriptions.push(subscription);
    console.log('New newsletter subscription:', subscription);
    return subscription;
  }

  async createDemoRequest(data: any) {
    const request = {
      ...data,
      id: Math.random().toString(36).substring(2, 15),
      date: new Date()
    };

    this.demoRequests.push(request);
    console.log('New demo request:', request);
    return request;
  }

  async createSolutionRequest(data: any) {
    const request = {
      ...data,
      id: Math.random().toString(36).substring(2, 15),
      date: new Date()
    };

    this.solutionRequests.push(request);
    console.log('New solution request:', request);
    return request;
  }
}

export const storage = new Storage();