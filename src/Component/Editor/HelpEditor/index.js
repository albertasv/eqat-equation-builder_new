import React, {Component} from "react";
import { Accordion, Icon, Button, Input } from 'semantic-ui-react';
import "./Style.css";

const panels = [
    {
      key: 'what-is-dog',
      title: 'What is a dog?',
      content: [
        'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome',
        'guest in many households across the world.',
      ].join(' '),
    },
    {
      key: 'kinds-of-dogs',
      title: 'What kinds of dogs are there?',
      content: [
        'There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog',
        'that they find to be compatible with their own lifestyle and desires from a companion.',
      ].join(' '),
    },
    {
      key: 'acquire-dog',
      title: 'How do you acquire a dog?',
      content: {
        content: (
          <div>
            <p>
              Three common ways for a prospective owner to acquire a dog is from
              pet shops, private owners, or shelters.
            </p>
            <p>
              A pet shop may be the most convenient way to buy a dog. Buying a dog
              from a private owner allows you to assess the pedigree and
              upbringing of your dog before choosing to take it home. Lastly,
              finding your dog from a shelter, helps give a good home to a dog who
              may not find one so readily.
            </p>
          </div>
        ),
      },
    },
];
export default class HelpEditor extends Component {
    render() {
        return (
            <div>
                <Button color="red"><Icon name="bug"></Icon> Report a bug</Button>
                <Button color="green"><Icon name="question"></Icon> Ask an question</Button>

                <h3>Search for question</h3>

                <Input icon={{ name: 'search', circular: true, link: true }} placeholder='Search...' />

                <h3>Context help</h3>

                <Accordion defaultActiveIndex={0} panels={panels} />

                <h3>Links</h3>
                
                <div className="linkWrapper"><a target="_blank" href="https://www.wiley.com"><Icon name="help"></Icon> EQAT help page <Icon size="small" name="external alternate"></Icon></a></div>
                <div className="linkWrapper"><a target="_blank" href="https://www.wiley.com"><Icon name="list"></Icon> EQAT release notes page <Icon size="small" name="external alternate"></Icon></a></div>
                <div className="linkWrapper"><a target="_blank" href="https://www.wiley.com"><Icon name="bug"></Icon> Known issues <Icon size="small" name="external alternate"></Icon></a></div>

                <h3>Q&A</h3>
                <Accordion defaultActiveIndex={0} panels={panels} />

            </div>
        )
    }
}
