'use client'
import {sql} from '@vercel/postgres'
export async function saveLead({name, email, phoneNumber}: {name: string, email: string, phoneNumber: string}) {
  try {
    await sql`INSERT INTRO PreEnrollment (name, email, phoneNumber) VALUES (${name}, ${email}, ${phoneNumber})`;
  }
  catch (error) {
    console.log(error)
  }
}