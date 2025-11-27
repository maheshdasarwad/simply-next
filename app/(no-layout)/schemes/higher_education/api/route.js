import { NextResponse } from "next/server";
import con from '../../../../../lib/conn.js';
import HEM from '../../../../../models/HigherEducation.js';

export async function GET() {
    await con();
    const data=await HEM.find({});
    console.log(data);
    return NextResponse.json({data:data});
}