import { ArrowRight, ShoppingBag, Star, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Navigation from "@/components/Navigation";

const Index = () => {
  const featuredProducts = products.slice(0, 6);
  const topRatedProducts = products
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6">
              Discover Amazing
              <span className="block text-primary">Products</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Your modern marketplace for unique finds. Shop from trusted sellers,
              discover new favorites, and join our growing community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="btn-smooth">
                <Link to="/search">
                  Browse Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="btn-smooth">
                <Link to="/upload">Start Selling</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <ShoppingBag className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">1000+</h3>
                <p className="text-muted-foreground">Products Available</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">4.8</h3>
                <p className="text-muted-foreground">Average Rating</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">500+</h3>
                <p className="text-muted-foreground">Happy Customers</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our handpicked selection of the most popular and highly-rated products
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild variant="outline" size="lg" className="btn-smooth">
              <Link to="/search">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Top Rated Section */}
      <section className="py-16 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Top Rated</h2>
            <p className="text-muted-foreground">
              Products loved by our community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topRatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-0">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Selling?</h2>
              <p className="text-muted-foreground mb-6 text-lg">
                Join thousands of sellers who trust our platform to grow their business.
                List your first product today and reach customers worldwide.
              </p>
              <Button size="lg" asChild className="btn-smooth">
                <Link to="/upload">
                  Start Selling Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <ShoppingBag className="h-6 w-6" />
                <span className="text-lg font-bold">MarketPlace</span>
              </div>
              <p className="text-background/70">
                Your modern marketplace for discovering and selling amazing products.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Shop</h3>
              <ul className="space-y-2 text-background/70">
                <li><Link to="/search" className="hover:text-background">All Products</Link></li>
                <li><Link to="/search?category=Electronics" className="hover:text-background">Electronics</Link></li>
                <li><Link to="/search?category=Accessories" className="hover:text-background">Accessories</Link></li>
                <li><Link to="/search?category=Home%20%26%20Office" className="hover:text-background">Home & Office</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Sell</h3>
              <ul className="space-y-2 text-background/70">
                <li><Link to="/upload" className="hover:text-background">List a Product</Link></li>
                <li><Link to="/login" className="hover:text-background">Seller Account</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Account</h3>
              <ul className="space-y-2 text-background/70">
                <li><Link to="/login" className="hover:text-background">Sign In</Link></li>
                <li><Link to="/login" className="hover:text-background">Create Account</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/70">
            <p>&copy; 2024 MarketPlace. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
