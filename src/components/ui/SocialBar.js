import React from 'react';
import { List } from 'semantic-ui-react';

const SocialBar = () => (
  <List horizontal>
    <List.Item>
      <List.Icon name="github" size="large" verticalAlign="middle" />
      <List.Content><a href="https://github.com/toncas" target="__blank">/toncas</a></List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name="twitch" size="large" verticalAlign="middle" />
      <List.Content><a href="https://twitch.tv/toncas" target="__blank">/toncas</a></List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name="twitter" size="large" verticalAlign="middle" />
      <List.Content><a href="https://twitter.com/antoniomgcastro" target="__blank">@antoniomgcastro</a></List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name="linkedin" size="large" verticalAlign="middle" />
      <List.Content><a href="https://linkedin.com/in/theantoniocastro" target="__blank">/in/theantoniocastro</a></List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name="instagram" size="large" verticalAlign="middle" />
      <List.Content><a href="https://instagram.com/toncas" target="__blank">/toncas</a></List.Content>
    </List.Item>
  </List>
);

export default SocialBar;
