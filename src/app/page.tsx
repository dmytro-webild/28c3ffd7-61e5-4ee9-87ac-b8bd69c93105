"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import { Award, Sparkles, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="compact"
        sizing="largeSmallSizeMediumTitles"
        background="noise"
        cardStyle="gradient-bordered"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="layered"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "home",
        },
        {
          name: "Services",
          id: "services",
        },
        {
          name: "Barbers",
          id: "barbers",
        },
        {
          name: "Reviews",
          id: "reviews",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Brooklyn Barbershop"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogoBillboard
      background={{
        variant: "plain",
      }}
      logoText="Brooklyn Barbershop"
      description="Trusted by hundreds of satisfied clients for sharp fades, clean cuts, and expert beard grooming."
      buttons={[
        {
          text: "📞 Call Now",
          href: "tel:+974XXXXXXXX",
        },
        {
          text: "📅 Book Appointment",
          href: "/contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/close-up-man-getting-his-hair-washed_23-2149220589.jpg"
      imageAlt="Modern barbershop interior with a barber chair"
      mediaAnimation="opacity"
    />
  </div>

  <div id="metrics" data-section="metrics">
      <AboutMetric
      useInvertedBackground={false}
      title="Why Brooklyn Barbershop is Doha's Top Choice"
      metrics={[
        {
          icon: Star,
          label: "Rated by Customers",
          value: "5 Stars",
        },
        {
          icon: Sparkles,
          label: "Signature Quality",
          value: "Precision & Detail",
        },
        {
          icon: Award,
          label: "Trusted Barbers",
          value: "Top Expertise",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="services-preview" data-section="services-preview">
      <FeatureCardTwentySix
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Haircuts & Fades",
          description: "Achieve the perfect look with our sharp fades, clean cuts, and personalized styling tailored to your preference.",
          buttonIcon: "ArrowRight",
          buttonHref: "/services",
          imageSrc: "http://img.b2bpic.net/free-vector/brush-barbershop-logo-template-design_742173-21231.jpg",
          imageAlt: "Haircut and fade icon",
        },
        {
          title: "Beard Trimming & Shaping",
          description: "Keep your beard looking its best with our precise trimming, shaping, and conditioning services.",
          buttonIcon: "ArrowRight",
          buttonHref: "/services",
          imageSrc: "http://img.b2bpic.net/free-vector/hand-drawn-beards-make-everything-better-desktop-wallpaper_742173-11689.jpg",
          imageAlt: "Beard trimming icon",
        },
        {
          title: "Full Grooming Packages",
          description: "Indulge in a complete transformation with our comprehensive grooming packages, including facials and more.",
          buttonIcon: "ArrowRight",
          buttonHref: "/services",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-toilet-bag-still-life_23-2149879571.jpg",
          imageAlt: "Grooming package icon",
        },
      ]}
      title="Our Signature Services"
      description="Experience the best in grooming with our expertly crafted services, designed for the modern man."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Fedy",
          date: "Jan 2024",
          title: "Best Barber in Doha",
          quote: "Fedy is one of the best barbers I’ve been to. Super professional, never rushed, and always gets every detail perfect. The result is always exactly what I ask for or better.",
          tag: "Expert Cuts",
          avatarSrc: "http://img.b2bpic.net/free-photo/portrait-confident-man-home-office_329181-20664.jpg",
          avatarAlt: "Fedy, satisfied client",
        },
        {
          id: "2",
          name: "UK Client",
          date: "Dec 2023",
          title: "Consistent 10/10 Service",
          quote: "Been coming from the UK for over a year. 10/10 service every time. Fedy has incredible attention to detail and does amazing fades and beard trims.",
          tag: "International Standard",
          avatarSrc: "http://img.b2bpic.net/free-photo/youth-modern-sport-activities-active-recreation-attractive-bearded-guy-posing-with-his-board-against-landscape-wild-beach-calm-waves-blue-sea-water-looking-happy_273609-1550.jpg",
          avatarAlt: "UK Client, satisfied",
        },
        {
          id: "3",
          name: "Doha Local",
          date: "Feb 2024",
          title: "Best Barbershop in Doha",
          quote: "Best barber shop in Doha! Clean fades, great atmosphere, and consistent quality.",
          tag: "Local Favorite",
          avatarSrc: "http://img.b2bpic.net/free-photo/african-american-business-man-cafe-drinking-coffee_1303-10327.jpg",
          avatarAlt: "Doha Local, satisfied",
        },
        {
          id: "4",
          name: "Muslim's Client",
          date: "Mar 2024",
          title: "Elite Level Skills",
          quote: "Muslim gave me one of the best haircuts I’ve ever had. Elite level skills and attention to detail.",
          tag: "Exceptional Skill",
          avatarSrc: "http://img.b2bpic.net/free-photo/adult-young-male-smiling_23-2148272553.jpg",
          avatarAlt: "Muslim's client, satisfied",
        },
        {
          id: "5",
          name: "Happy Customer",
          date: "Apr 2024",
          title: "Top-Quality Experience",
          quote: "Great atmosphere, music, and top-quality service. Haircut, beard trim, and facial all done perfectly.",
          tag: "Premium Experience",
          avatarSrc: "http://img.b2bpic.net/free-photo/handsome-young-bearded-man-smiling-looking-away-while-professional-barber-giving-him-haircut-copyspace_7502-5640.jpg",
          avatarAlt: "Happy customer, enjoying atmosphere",
        },
      ]}
      title="Hear From Our Happy Clients"
      description="Real feedback from satisfied customers about our quality, consistency, and expert barbers."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      members={[
        {
          id: "fedy",
          name: "Fedy",
          role: "Master Barber & Stylist",
          description: "Known for precision fades and meticulous detailing, Fedy is highly recommended by our loyal clientele for his consistent, perfect results.",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-male-barber-holding-scissors-barbershop_23-2148985743.jpg",
          imageAlt: "Portrait of Fedy, Master Barber",
        },
        {
          id: "muslim",
          name: "Muslim",
          role: "Elite Level Barber",
          description: "Muslim brings elite-level skills and an incredible eye for detail to every cut and trim, ensuring consistent, high-quality finishes.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-hairdresser-making-haircut_23-2149220581.jpg",
          imageAlt: "Portrait of Muslim, Elite Level Barber",
        },
        {
          id: "mohammad",
          name: "Mohammad",
          role: "Hair & Beard Detailing Specialist",
          description: "An expert in both hair and beard detailing, Mohammad ensures every client leaves with a sharp, refined look tailored to their unique style.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-bearded-male-sunglasses-with-tattoo-his-arm_613910-12144.jpg",
          imageAlt: "Portrait of Mohammad, Detailing Specialist",
        },
        {
          id: "ali",
          name: "Ali",
          role: "Experienced & Bilingual Stylist",
          description: "Friendly, experienced, and bilingual, Ali offers a comfortable and professional grooming experience for all hair types and styles.",
          imageSrc: "http://img.b2bpic.net/free-photo/stylish-beard-man-singing-microphone_23-2148328567.jpg",
          imageAlt: "Portrait of Ali, Bilingual Stylist",
        },
      ]}
      title="Meet Our Expert Barbers"
      description="Our team of highly skilled and experienced barbers is dedicated to providing you with the best grooming experience in Doha."
    />
  </div>

  <div id="contact-cta" data-section="contact-cta">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Book Your Visit"
      title="Ready for a Clean, Sharp Look?"
      description="Reach out to Brooklyn Barbershop today to schedule your next premium haircut, fade, or grooming service in Doha."
      buttons={[
        {
          text: "📞 Call Now",
          href: "tel:+974XXXXXXXX",
        },
        {
          text: "📅 Book Appointment",
          href: "/contact",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Brooklyn Barbershop"
      columns={[
        {
          title: "Services",
          items: [
            {
              label: "Haircuts",
              href: "/services#haircuts",
            },
            {
              label: "Beard Trims",
              href: "/services#beard-trims",
            },
            {
              label: "Grooming Packages",
              href: "/services#packages",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#",
            },
            {
              label: "Our Barbers",
              href: "/barbers",
            },
            {
              label: "Reviews",
              href: "/reviews",
            },
            {
              label: "Contact",
              href: "/contact",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2024 Brooklyn Barbershop. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
