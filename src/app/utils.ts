import { NextResponse } from "next/server";

const response200 = (data: unknown) => {
  return NextResponse.json(data, {
    status: 200,
  });
};

const response400 = (message: string) => {
  return NextResponse.json(
    {
      message: message,
    },
    {
      status: 400,
    }
  );
};

const response401 = (message: string) => {
  return NextResponse.json(
    {
      message: message,
    },
    {
      status: 401,
    }
  );
};

const response404 = (message: string) => {
  return NextResponse.json(
    {
      message: message,
    },
    {
      status: 404,
    }
  );
};

const response409 = (message: string) => {
  return NextResponse.json(
    {
      message: message,
    },
    {
      status: 409,
    }
  );
};

const response500 = (message: string) => {
  return NextResponse.json(
    {
      message: message,
    },
    {
      status: 500,
    }
  );
};

export {
  response200,
  response400,
  response401,
  response404,
  response409,
  response500,
};
