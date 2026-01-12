# Footer Email Collection Setup Guide

## How It Works

The footer form collects email addresses and creates customer records in Shopify. Here's how to access and manage them:

### Viewing Subscribers

1. **Go to Shopify Admin** → **Customers**
2. Look for customers with the tag **"newsletter"** or **"interested"**
3. You can filter customers by tags to see all newsletter subscribers

### How Customers Are Created

The form creates customer accounts in Shopify with:
- Email address (from form)
- Tag: "newsletter" and "interested" (for easy filtering)
- Marketing consent: Enabled
- Random password (they can reset if needed)

### Important Notes

**If customer already exists:**
- The form will still show success (to prevent email harvesting)
- The existing customer will be updated with marketing consent
- They'll appear in your Customers list

**Alternative Method (if needed):**
If you prefer not to create full customer accounts, you can:
1. Check **Shopify Admin** → **Online Store** → **Preferences** → **Customer accounts**
2. Enable "Accounts are optional" 
3. Or use a third-party app like Klaviyo for newsletter-only signups

### Customizing the Footer

All footer content is customizable via **Shopify Admin** → **Online Store** → **Themes** → **Customize** → **Footer**:

- Newsletter title and button text
- Brand description and tagline
- Footer logo
- Location text
- Social media links
- Footer links (Privacy Policy, Shipping, etc.)
- Copyright text

### Testing

1. Submit a test email through the footer form
2. Check **Shopify Admin** → **Customers**
3. Look for the email with tags "newsletter" and "interested"
4. You can export customer list or filter by tags

### Exporting Subscribers

1. Go to **Shopify Admin** → **Customers**
2. Filter by tag: "newsletter"
3. Click **Export** to download CSV
4. Use this list for email marketing (Mailchimp, Klaviyo, etc.)

---

## Troubleshooting

**Emails not appearing in Customers tab:**
- Check if email already exists (search in Customers)
- Verify form submission is working (check browser console)
- Try submitting with a different email address

**Need newsletter-only (no customer accounts):**
- Consider using Klaviyo or Mailchimp app
- They provide newsletter signup widgets
- Better for pure email marketing lists

---

## Next Steps

1. **Customize footer content** in theme editor
2. **Test the form** with your email
3. **Check Customers tab** to verify it works
4. **Set up email marketing** (optional) - connect to Klaviyo/Mailchimp for campaigns
