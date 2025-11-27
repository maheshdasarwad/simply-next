import { NextResponse } from "next/server";
import con from '../../../../../lib/conn.js';
import SEM from '../../../../../models/SecondaryEducation.js';

export async function GET() {
    await con();
    const data=await SEM.find({});
    console.log(data);
    return NextResponse.json({data:data});
}



