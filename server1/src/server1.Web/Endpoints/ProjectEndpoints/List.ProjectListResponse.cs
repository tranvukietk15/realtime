﻿
namespace server1.Web.Endpoints.ProjectEndpoints;

public class ProjectListResponse
{
  public List<ProjectRecord> Projects { get; set; } = new();
}
