import {  Container, Accordion, ThemeIcon, rem } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import classes from './FaqSimple.module.css';
// import { Button, Title } from "..";
import React from "react";
import Title from '../../Title';
const placeholder =
  'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.';
  
  const Faq = () => {
    const containerStyles = {
      paddingLeft: '20px', // Default padding for larger screens
      paddingTop: '100px',
      paddingBottom: '50px'
    };
  
    const mobileContainerStyles = {
      paddingLeft: '10px', // Adjusted padding for mobile screens
      paddingTop: '50px', // Adjusted padding for mobile screens
      paddingBottom: '30px' // Adjusted padding for mobile screens
    };
  
    const accordionStyles = {
      label: { color: 'var(--mantine-color-black)' },
      item: {
        border: '0px',
        width: '1000px', // Set width to 100% for responsiveness
        borderRadius: '8px',
        border: '2px solid #62777D',
        background: 'rgba(23, 42, 48, 0.20)',
        backdropFilter: 'blur(155px)',
        margin: '20px 0',
        padding: '20px',
        marginLeft:'550px'
      }
    };
  
    const mobileStyles = {
      item: {
        margin: '20px 0',

        padding: '20px' // Adjust padding for mobile screens
      }
    };
    return (
      <div className={classes.wrapper}>
        <Container size="sm" style={containerStyles}>
          <Title ta="center" className={`${classes.title} ${classes.center}`}>
            Frequently Asked <span className={classes.gradient}>Questions</span>
          </Title>
          </Container>

          <Accordion
        chevronPosition="right"
        defaultValue="reset-password"
        chevronSize={26}
        variant="separated"
        disableChevronRotation
        styles={{ ...accordionStyles, ...(window.innerWidth <= 768 ? mobileStyles : {}) }}
        chevron={
          <ThemeIcon radius="xl" className={classes.gradient} size={26}>
            <IconPlus style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ThemeIcon>
        }
      >
          <Accordion.Item className={classes.item} value="reset-password">
            <Accordion.Control>How can I reset my password?</Accordion.Control>
            <Accordion.Panel>{placeholder}</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="another-account">
            <Accordion.Control>Can I create more that one account?</Accordion.Control>
            <Accordion.Panel>{placeholder}</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="newsletter">
            <Accordion.Control>How can I subscribe to monthly newsletter?</Accordion.Control>
            <Accordion.Panel>{placeholder}</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="credit-card">
            <Accordion.Control>Do you store credit card information securely?</Accordion.Control>
            <Accordion.Panel>{placeholder}</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="payment">
            <Accordion.Control>What payment systems to you work with?</Accordion.Control>
            <Accordion.Panel>{placeholder}</Accordion.Panel>
          </Accordion.Item>
        </Accordion>
    </div>
  );
}
export default Faq