import { response400 } from "@/app/utils";

function formatDateTime(date: Date) {
  let formatter = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return formatter.format(date);
}

async function parseJsonFromBody(request: Request): Promise<
  | {
      ok: true;
      data: JSON;
    }
  | {
      ok: false;
      message: string;
    }
> {
  let body = undefined;
  try {
    body = await request.json();
    return {
      ok: true,
      data: body,
    };
  } catch (err) {
    return {
      ok: false,
      message: "Body needs to be in JSON format",
    };
  }
}

export { formatDateTime, parseJsonFromBody };
