import { ConvexError, v } from "convex/values";
import { MutationCtx, QueryCtx, internalMutation } from "./_generated/server";

export async function getUser(
  ctx: QueryCtx | MutationCtx,
  tokenIdentifier: string
) {
  const user = await ctx.db
    .query("users")
    .withIndex("by_tokenIdentifier", (q) =>
      q.eq("tokenIdentifier", tokenIdentifier)
    )
    .first();

  console.log("user", user);

  if (!user) {
    throw new ConvexError("expected user to be defined");
  }

  return user;
}

//factual-swan-76.clerk.accounts.dev|user_2dpd4ATDijLHAB6EkojyTcsRpIK

export const createUser = internalMutation({
  args: { tokenIdentifier: v.string() },
  async handler(ctx, args) {
    await ctx.db.insert("users", {
      tokenIdentifier: args.tokenIdentifier,
      orgIds: [],
    });
  },
});

export const addOrgIdToUser = internalMutation({
  args: { tokenIdentifier: v.string(), orgId: v.string() },
  async handler(ctx, args) {
    console.log("token", args.tokenIdentifier);

    const user = await getUser(ctx, args.tokenIdentifier);

    await ctx.db.patch(user._id, {
      orgIds: [...user.orgIds, args.orgId],
    });

    // const user = await ctx.db
    //   .query("users")
    //   .withIndex("by_tokenIdentifier", (q) =>
    //     q.eq("tokenIdentifier", args.tokenIdentifier)
    //   )
    //   .first();
    // if (!user) {
    //   throw new ConvexError("expected user to be defined");
    // }

    // await ctx.db.insert("users", {
    //   tokenIdentifier: args.tokenIdentifier,
    //   orgIds: [...user.orgIds, args.orgId],
    // });
  },
});
