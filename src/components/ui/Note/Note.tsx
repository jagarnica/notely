import * as React from "react";
import { Input, Textarea, Text, SimpleGrid, BoxProps } from "@chakra-ui/react";
import { Button } from "components/ui/Button";
import { Card } from "components/ui/Card";
export type UserNote = {
  title?: string;
  description: string;
};

export interface NoteProps extends BoxProps {
  onSubmit?: () => void;
  readOnly?: boolean;
  initialValue?: UserNote;
}
export const Note = ({
  onSubmit,
  readOnly,
  initialValue,
  ...rest
}: NoteProps): JSX.Element => {
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    onSubmit?.();
  }
  if (readOnly && initialValue) {
    return (
      <Card bg="white" p="4" {...rest}>
        <SimpleGrid color="blue.800" column={1} spacing={2}>
          <Text fontSize="2xl" fontWeight="bold">
            {initialValue.title}
          </Text>
          <Text>{initialValue.description}</Text>
        </SimpleGrid>
      </Card>
    );
  }
  return (
    <Card p="4" {...rest}>
      <form onSubmit={handleSubmit}>
        <SimpleGrid column={1} spacing={6} color="blue.800">
          <Text fontWeight="bold" fontSize="2xl">
            Create New Note:
          </Text>
          <Input placeholder="Note Title" />
          <Textarea placeholder="Enter your notes" />
          <Button isFullWidth type="submit">
            Save
          </Button>
        </SimpleGrid>
      </form>
    </Card>
  );
};
