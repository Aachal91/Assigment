import React from 'react'

import { Card, Text, Group, Button, Image, useMantineTheme, Space } from '@mantine/core';
import { FollowButton } from './UIcons/FollowButton';
import { DeleteIcon } from './UIcons/DeleteIcon';
import { StarIcon } from './UIcons/StarIcon';
import { EmailIcon } from './UIcons/EmailIcon';
import { PhoneIcon } from './UIcons/PhoneIcon';
import { Website } from './UIcons/Website';

const NewCard = props => {

  
  const { id, name, username, email, phone, website , star} = props.data;
  const{ handleDelete, handleFollow } = props;
  

  const mainsrc = 'https://api.dicebear.com/7.x/initials/svg?seed=' + username;


  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={mainsrc}
          ml={150}
          my={20}
          h={100}
          w={100}
          alt="Norway"
          radius={100}
        />
      </Card.Section>

      <Group justify="center" mt="md" mb="xs">
        <Text fw={500} size="lg">{name} {star && <StarIcon />}</Text>
       
      </Group>

      <Text size="sm" c="dimmed"><EmailIcon/>{email}</Text>
      <Text size="sm" c="dimmed"><PhoneIcon/>{phone}</Text>
      <Text size="sm" c="dimmed"><Website />{website}</Text> 
      
      <Group justify='center'>
      <Button size="md" onClick={() => handleFollow(id)}><FollowButton /> Follow</Button>
      <Button size="md" onClick={() => handleDelete(id)}><DeleteIcon /> Delete</Button>
      </Group>
    </Card>
  );
}

export default NewCard
