import React from 'react'
import {
    Editable,
    EditableInput,
    EditableTextarea,
    EditablePreview,
    Input,
    Flex,
    IconButton,
    ButtonGroup,
     
    
  } from '@chakra-ui/react'
  import {
    Card,
    CardBody,
    CardHeader,
    Typography,
    Button,
    Textarea,
  } from "@material-tailwind/react";
 
  import { useEditableControls, useControllableState } from '@chakra-ui/react'
export default function CustomControlsExample() {
    /* Here's a custom control */

    
    return (
      <Card className="shadow-lg shadow-gray-500/10">
      <CardHeader className="">
      Bandes annonces
      </CardHeader>
      <CardBody>
      <video width="320" height="240" controls>
      <source src={film5} type="video/mp4"/> 
</video>
          
      </CardBody>
    </Card>
     
    )
  }