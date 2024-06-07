'use client';

import React from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';

import MapIcon from '@mui/icons-material/Map';
import ListIcon from '@mui/icons-material/List';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { Select } from '@mui/material';
import {
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
} from './ui/select';

const formSchema = z.object({
  address: z.string().min(3),
  //   listingType: z.string(),
  propertyType: z.string(),
  propertySize: z.string(),

  listingType: z.enum(['buy', 'rent']),
  //   propertyType: z.enum(['house', 'apartment', 'land']),
  //   propertySize: z.number(),
});

function onSubmit(values: z.infer<typeof formSchema>) {
  // Do something with the form values.
  // ✅ This will be type-safe and validated.
  console.log(values);
}

const Search = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      address: '',
      listingType: 'buy',
      propertyType: '',
      propertySize: '',
    },
  });

  return (
    <div className="flex flex-row p-2 justify-between">
      <div className="flex flex-row">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-x-1 p-1 flex flex-row w-full">
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="w-[170px]"
                      placeholder="Address or Location"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/*      */}

            <FormField
              control={form.control}
              name="listingType"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Listing Type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="m@example.com">
                        m@example.com
                      </SelectItem>
                      <SelectItem value="m@google.com">m@google.com</SelectItem>
                      <SelectItem value="m@support.com">
                        m@support.com
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            {/*  */}
            {/* <Button type="submit">Submit</Button> */}
          </form>
        </Form>
      </div>

      <div className="flex flex-row space-x-1">
        <Button className="bg-white text-black space-x-3 hover:bg-slate-100 ">
          <TuneRoundedIcon /> Filters
        </Button>
        <Button className="bg-white text-black hover:bg-slate-100 font-bold">
          Sort
        </Button>
        <Button className="bg-white text-black hover:bg-slate-100 font-bold">
          Save
        </Button>
        <Button className="bg-white text-black hover:bg-slate-100 font-bold">
          Reports
        </Button>
        <Button className="bg-white text-black hover:bg-slate-100 font-bold">
          More
        </Button>
        <div className="mr-7">
          {new Array(5).fill(0).map((_, i) => (
            <button key={i}>
              <StarBorderRoundedIcon />
            </button>
          ))}
        </div>
      </div>

      <div className="flex space-x-3 ">
        <Link href="/mapview" className="flex flex-col ">
          <MapIcon />
          <p className="font-bold">Map</p>
        </Link>

        <Link href={'/listview'} className="flex flex-col ">
          <ListIcon />
          <p className="font-bold">List</p>
        </Link>

        <Link href={'/analytics'} className="flex flex-col ">
          <LeaderboardIcon />
          <p className="font-bold">List</p>
        </Link>
      </div>
    </div>
  );
};

export default Search;
