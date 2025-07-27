"use client";

import { User, Linkedin, Mail } from 'lucide-react';
import { Container } from './ui/Container';
import { Heading, Text } from './ui/Typography';
import { Card, CardContent } from '../src/components/ui/card';
import { Button } from '../src/components/ui/button';

export default function FounderSection() {
  return (
    <section className="min-h-screen py-24 flex items-center justify-center" style={{ backgroundColor: '#FAF4EC' }}>
      <Container size="lg">
        <div className="text-center">
          <Heading variant="h1" className="text-6xl lg:text-7xl text-dark-text mb-20">
            Meet the Founder
          </Heading>

          <Card className="max-w-4xl mx-auto mb-16 overflow-hidden">
            <CardContent className="p-12">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="flex-shrink-0">
                  <div className="w-48 h-48 bg-gradient-to-br from-light-green to-light-blue rounded-full flex items-center justify-center shadow-2xl">
                    <User className="w-24 h-24 text-white" />
                  </div>
                </div>
                
                <div className="text-center lg:text-left">
                  <Heading variant="h2" className="text-5xl lg:text-6xl text-dark-text mb-8">
                    Mathis Laurent
                  </Heading>
                  
                  <Text className="text-lg text-light-blue mb-6 font-semibold">
                    Founder & CEO
                  </Text>
                  
                  <div className="space-y-6">
                    <Text variant="lead" className="text-xl text-dark-text/80">
                      Passionate about creating technology that bridges the gap between individual action and collective impact.
                    </Text>
                    
                    <Text variant="lead" className="text-xl text-dark-text/80">
                      Combining years of experience in product development with a deep commitment to environmental sustainability, 
                      Mathis founded Tupi to make ecological action accessible, engaging, and meaningful for everyone.
                    </Text>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
            <Button 
              size="lg" 
              className="bg-light-green hover:bg-dark-green transition-colors text-white flex items-center gap-3"
            >
              <Linkedin className="w-5 h-5" />
              Connect on LinkedIn
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-light-green text-light-green hover:bg-light-green hover:text-white transition-colors flex items-center gap-3"
            >
              <Mail className="w-5 h-5" />
              Send Email
            </Button>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="bg-gradient-to-r from-light-green/10 to-light-blue/10 border border-light-green/20">
              <CardContent className="p-10">
                <Text className="text-dark-text italic text-2xl lg:text-3xl font-medium">
                  &quot;Every drop creates ripples. Every action builds momentum.&quot;
                </Text>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}