
import { useAuth } from '@clerk/nextjs';
import { NextRequest, NextResponse } from 'next/server';



export default  function GET(request:NextRequest){
    const userId =  useAuth();
    const res =  userId
    return (
        NextResponse.json({res})
    )
}