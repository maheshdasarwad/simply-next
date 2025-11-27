import { NextResponse } from "next/server";
import con from '../../../../../lib/conn.js';
import WWM from '../../../../../models/WomenWelfare.js';

export async function GET() {
    await con();
    const data=await WWM.find({});
    console.log(data);
    return NextResponse.json({data:data});
}