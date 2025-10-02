import { useState } from 'react';
import { Button } from "/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "/components/ui/card";
import { Input } from "/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "/components/ui/label";

const CafeWebsite = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', { name, email, message });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full"></div>
              <h1 className="text-2xl font-bold text-foreground">Bella Caffè</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
              <a href="#menu" className="text-foreground hover:text-primary transition-colors">Menu</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
            </nav>
            <Button variant="outline" className="md:hidden">Menu</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Artisanal Coffee & Cozy Atmosphere
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Experience the perfect blend of premium coffee beans and warm hospitality. 
                Every cup tells a story of craftsmanship and passion.
              </p>
              <div className="flex space-x-4">
                <Button size="lg">View Menu</Button>
                <Button variant="outline" size="lg">Book a Table</Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://placeholder-image-service.onrender.com/image/600x400?prompt=A cozy cafe interior with warm lighting, rustic wooden tables, and people enjoying coffee&id=cafe-interior-1" 
                alt="Warm and inviting cafe interior with comfortable seating and ambient lighting"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu */}
      <section id="menu" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Specialties</h2>
            <p className="text-muted-foreground text-lg">Handcrafted with care, served with love</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Coffee Item 1 */}
            <Card className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://placeholder-image-service.onrender.com/image/400x300?prompt=Artisan espresso with perfect crema in a white ceramic cup&id=espresso-1" 
                  alt="Rich espresso with golden crema in a ceramic cup on a wooden table"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Signature Espresso</CardTitle>
                <CardDescription>Our house blend, roasted to perfection</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Bold and smooth with notes of chocolate and caramel</p>
              </CardContent>
              <CardFooter>
                <div className="flex justify-between items-center w-full">
                  <span className="text-2xl font-bold text-primary">$4.50</span>
                  <Button variant="outline">Add to Order</Button>
                </div>
              </CardFooter>
            </Card>

            {/* Coffee Item 2 */}
            <Card className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://placeholder-image-service.onrender.com/image/400x300?prompt=Beautiful latte art with heart pattern in a glass mug&id=latte-1" 
                  alt="Elegant latte with heart-shaped foam art in a clear glass mug"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Artisan Latte</CardTitle>
                <CardDescription>Velvety smooth with beautiful art</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Creamy texture with your choice of milk and syrup</p>
              </CardContent>
              <CardFooter>
                <div className="flex justify-between items-center w-full">
                  <span className="text-2xl font-bold text-primary">$5.75</span>
                  <Button variant="outline">Add to Order</Button>
                </div>
              </CardFooter>
            </Card>

            {/* Coffee Item 3 */}
            <Card className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://placeholder-image-service.onrender.com/image/400x300?prompt=Cold brew coffee with ice in a mason jar&id=cold-brew-1" 
                  alt="Refreshing cold brew coffee with ice cubes in a rustic mason jar"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Cold Brew Delight</CardTitle>
                <CardDescription>Slow-steeped for 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Smooth, less acidic, and refreshingly cold</p>
              </CardContent>
              <CardFooter>
                <div className="flex justify-between items-center w-full">
                  <span className="text-2xl font-bold text-primary">$6.25</span>
                  <Button variant="outline">Add to Order</Button>
                </div>
              </CardFooter>
            </Card>

            {/* Coffee Item 4 */}
            <Card className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://placeholder-image-service.onrender.com/image/400x300?prompt=Cappuccino with chocolate powder and cinnamon&id=cappuccino-1" 
                  alt="Perfect cappuccino with chocolate dusting and cinnamon sprinkle"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Classic Cappuccino</CardTitle>
                <CardDescription>Perfect foam-to-espresso ratio</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Traditional Italian style with a touch of cinnamon</p>
              </CardContent>
              <CardFooter>
                <div className="flex justify-between items-center w-full">
                  <span className="text-2xl font-bold text-primary">$5.25</span>
                  <Button variant="outline">Add to Order</Button>
                </div>
              </CardFooter>
            </Card>

            {/* Coffee Item 5 */}
            <Card className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://placeholder-image-service.onrender.com/image/400x300?prompt=Mocha coffee with whipped cream and chocolate drizzle&id=mocha-1" 
                  alt="Decadent mocha coffee topped with whipped cream and chocolate sauce"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Decadent Mocha</CardTitle>
                <CardDescription>Chocolate lovers' paradise</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Rich chocolate meets premium espresso</p>
              </CardContent>
              <CardFooter>
                <div className="flex justify-between items-center w-full">
                  <span className="text-2xl font-bold text-primary">$6.50</span>
                  <Button variant="outline">Add to Order</Button>
                </div>
              </CardFooter>
            </Card>

            {/* Coffee Item 6 */}
            <Card className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://placeholder-image-service.onrender.com/image/400x300?prompt=Matcha latte in a ceramic bowl with bamboo whisk&id=matcha-1" 
                  alt="Vibrant green matcha latte in a traditional ceramic bowl with bamboo whisk"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Ceremonial Matcha</CardTitle>
                <CardDescription>Premium Japanese green tea</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Authentic ceremonial grade matcha, whisked to perfection</p>
              </CardContent>
              <CardFooter>
                <div className="flex justify-between items-center w-full">
                  <span className="text-2xl font-bold text-primary">$7.25</span>
                  <Button variant="outline">Add to Order</Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://placeholder-image-service.onrender.com/image/600x400?prompt=Barista carefully pouring latte art in a busy cafe&id=barista-1" 
                alt="Skilled barista creating beautiful latte art with focused precision"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-6 text-lg">
                Founded in 2015, Bella Caffè began as a small dream to bring exceptional coffee 
                to our community. Every bean is ethically sourced from sustainable farms, and 
                every cup is crafted with attention to detail.
              </p>
              <p className="text-muted-foreground mb-8 text-lg">
                Our baristas are trained artisans who take pride in creating not just coffee, 
                but experiences. We believe in the power of a perfect cup to bring people together 
                and create lasting memories.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">100%</h3>
                  <p className="text-muted-foreground">Ethically Sourced</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">5000+</h3>
                  <p className="text-muted-foreground">Happy Customers</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">8</h3>
                  <p className="text-muted-foreground">Years Experience</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">24</h3>
                  <p className="text-muted-foreground">Coffee Varieties</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Visit Us</h2>
            <p className="text-muted-foreground text-lg">We'd love to hear from you</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Hours & Location</h3>
              <div className="space-y-4 text-muted-foreground">
                <p className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium">7:00 AM - 9:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium">8:00 AM - 10:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium">8:00 AM - 8:00 PM</span>
                </p>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-foreground mb-4">Address</h4>
                <p className="text-muted-foreground">
                  123 Coffee Lane<br />
                  Downtown District<br />
                  City, State 12345
                </p>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-foreground mb-4">Contact Info</h4>
                <p className="text-muted-foreground">
                  Phone: (555) 123-4567<br />
                  Email: hello@bellacaffe.com
                </p>
              </div>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                  <CardDescription>We'll get back to you within 24 hours</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell us how we can help..."
                        rows={4}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Bella Caffè</h3>
              <p className="text-muted">
                Where every cup tells a story of passion and perfection.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-muted hover:text-background">Home</a></li>
                <li><a href="#menu" className="text-muted hover:text-background">Menu</a></li>
                <li><a href="#about" className="text-muted hover:text-background">About</a></li>
                <li><a href="#contact" className="text-muted hover:text-background">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted hover:text-background">Instagram</a></li>
                <li><a href="#" className="text-muted hover:text-background">Facebook</a></li>
                <li><a href="#" className="text-muted hover:text-background">Twitter</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-muted mb-4">Stay updated with our latest offers</p>
              <div className="flex space-x-2">
                <Input placeholder="Your email" className="bg-foreground border-border" />
                <Button variant="secondary">Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted">
            <p>&copy; 2024 Bella Caffè. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CafeWebsite;
