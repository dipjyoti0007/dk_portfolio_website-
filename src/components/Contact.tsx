import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Github, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log('Initializing EmailJS...');
      // Initialize EmailJS with your public key
      emailjs.init('ogfwjcGa5Pwe99uW1');

      // Template parameters - matching your EmailJS template exactly
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.message,
        message: formData.message,
        to_email: 'dipjyotikodali@gmail.com',
        reply_to: formData.email,
      };

      console.log('Template params:', templateParams);
      console.log('Service ID:', 'service_hfq298q');
      console.log('Template ID:', 'template_rgfdhlb');

      // Send email using EmailJS
      const result = await emailjs.send(
        'service_hfq298q',
        'template_rgfdhlb',
        templateParams,
        'ogfwjcGa5Pwe99uW1'
      );

      console.log('EmailJS response:', result);
      
      if (result.status === 200) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        
        // Reset form
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(`EmailJS returned status: ${result.status}`);
      }
    } catch (error) {
      console.error('Detailed error:', error);
      toast({
        title: "Failed to send message",
        description: "There was an error sending your message. Please check the console for details or try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's collaborate on innovative projects or discuss exciting opportunities in embedded systems and IoT
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Let's Connect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">📧 Email</h3>
                  <p className="text-muted-foreground">dipjyotikodali@gmail.com</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">📱 Phone</h3>
                  <p className="text-muted-foreground">+91 8240178233</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">🌐 Social Links</h3>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://www.linkedin.com/in/dipjyoti-kodali-b9148a248/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-4 h-4 mr-2" />
                        LinkedIn
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://github.com/dipjyoti0007" target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Currently Open To</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-foreground rounded-full mr-3"></span>
                    Full-time opportunities in Embedded Systems
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-foreground rounded-full mr-3"></span>
                    IoT and Biomedical Technology projects
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-foreground rounded-full mr-3"></span>
                    Research collaborations
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-foreground rounded-full mr-3"></span>
                    Technical consulting opportunities
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                      disabled={isLoading}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@example.com"
                      disabled={isLoading}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Input
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="What's this about?"
                    disabled={isLoading}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
