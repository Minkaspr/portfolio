import { Project } from "./project";

export interface ApiResponse {
  statusCode: number;
  statusMessage: string;
  data: Project[];
}
