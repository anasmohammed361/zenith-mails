# Emailer-SaaS

Emailer-SaaS is an open-source project aimed at providing email automation capabilities with ease. Built with SvelteKit, it offers a straightforward solution for managing and automating email campaigns, whether for marketing, notifications, or any other purpose.

## **License**

Emailer-SaaS is licensed under the MIT License.

## **Hosted Version Deprecation Notice**

Please note that the hosted version of Emailer-SaaS is being taken down. However, the open-source codebase is still available for you to fork and self-host. This allows you to still use the email automation capabilities of Emailer-SaaS.

# **Self-Hosting and Deployment**

## **Deployment Options**

### 1. AWS Deployment with SST

#### Prerequisites
- Node.js installed
- AWS CLI configured
- AWS Account with appropriate permissions

#### Steps to Deploy with SST

1. Install SST globally:
```bash
npm install -g sst
```

2. Configure AWS CLI:
```bash
aws configure
```


4. Follow the SST setup guide to configure your deployment settings.

For detailed SST documentation, visit: [SST Documentation](https://sst.dev/docs)

### 2. Docker Deployment

You can also deploy using the provided Dockerfile for self-hosting on any platform that supports Docker containers.

```bash
docker build -t emailer-saas .
docker run -p 3000:3000 emailer-saas
```

## **Technology Stack**

### Database
The project uses [Turso](https://turso.tech/) as the default database. To use a different database:

1. Modify the `drizzle.config.ts` file
2. Update the database schema in `src/lib/db`
3. Follow [Drizzle ORM documentation](https://orm.drizzle.team/docs/overview) for database-specific configurations

### Authentication
Authentication is handled using Auth.js. For detailed authentication setup and customization, refer to the [Auth.js documentation](https://authjs.dev/getting-started/installation?framework=next-js)

## **Contributing**

Contributions are welcome! Please feel free to submit a Pull Request.