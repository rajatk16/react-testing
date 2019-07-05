import React from 'react'
import { mount } from "enzyme";
import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapped;

beforeEach(() => {
 wrapped = mount(
   <Root>
     <CommentList comments={['New', 'Comment', 'List', 'Here']}/>
   </Root>
 )
});

it('creates one li element per comment', () => {
  expect(wrapped.find('li').length).toEqual(2);
});

it('shows the text for each comment', () => {
  expect(wrapped.render().text()).toContain("Hello World");
  expect(wrapped.render().text()).toContain("Wassup");
});