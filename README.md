# Ratings & Reviews API for E-Commerce Website

## Overview

The goal was to replace an existing API with a back end system that can support the full data set for
an E-commerce site that can scale to meet the demands of production traffic.

## Tech Stack

**Server:** [Node](https://nodejs.org/en/), [Express](https://expressjs.com/)

**Database:** [MongoDB](https://www.mongodb.com/), [Mongoose](https://mongoosejs.com/)

**Production Deployment:** 3x AWS EC2 (t2.micro) instances - 20.04 Ubuntu - 8GB SSD

**Development Stress Testing:** [artillery.io](https://artillery.io/), [New Relic](https://newrelic.com/)

**Production Stress Testing:** [loader.io](https://loader.io/)

## API Reference

### Get item

```http
  GET /products/:product_id
```

| Parameter    | Type     | Description                            |
| :----------- | :------- | :------------------------------------- |
| `product_id` | `string` | **Required**. Fetch item of product_id |

#### Reponse

```http
  Status: 200 OK
```

### Get item

```http
  GET /products/:product_id/styles
```

| Parameter    | Type     | Description                              |
| :----------- | :------- | :--------------------------------------- |
| `product_id` | `string` | **Required**. Fetch styles of product_id |

#### Reponse

```http
  Status: 200 OK
```

### Get item

```http
  GET /products/:product_id/related
```

| Parameter    | Type     | Description                                        |
| :----------- | :------- | :------------------------------------------------- |
| `product_id` | `string` | **Required**. Fetch related products of product_id |

#### Reponse

```http
  Status: 200 OK
```

## Optimizations

Implemented MongoDB [pipeline aggregation](https://docs.mongodb.com/manual/core/aggregation-pipeline/) consolidating collections to a single collection reducing complicated queries.

Utilized AWS load balancer to increase traffic up to 1600 requests per second while maintaining over 99% success rate.

## Environment Variables

To run this project, you will need to add the following environment variables to your .config file

`LICENSE_KEY`

`NEW_RELIC_APP_NAME`

## Testing Results

![Imgur](https://i.imgur.com/23QHyHP.png)

![Imgur](https://i.imgur.com/BC7kKSt.png)

## Author

- [Scott Provence](https://github.com/scopro220/)
