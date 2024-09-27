import React from "react";
import Accordion from "./Accordion";

const FAQ = () => {
    return (
        <div className="p-4  rounded-lgw w-full font-quicksand">
            <Accordion
                title="Consequat sed pharetra nec"
                answer="I like to use iOS products"
            />
            <Accordion
                title="Do you prefer writing CSS or Tailwind?"
                answer="I like to use Tailwind"
            />
            <Accordion title="Firebase or Supabase?" answer="I am using Supabase!" />
        </div>
    );
};

export default FAQ;