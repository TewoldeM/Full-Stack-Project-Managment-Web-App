"use client";

import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import {
  ArrowLeft,
  ArrowRight,
  Filter,
  MoreHorizontal,
  Menu,
  X,
} from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Badge } from "./ui/badge";
import { useState } from "react";

interface Props {
  boardTitle?: string;
  onEditBoard?: () => void;
  onFilterClick?: () => void;
  filterCount?: number;
}

export default function Navbar({
  boardTitle,
  onEditBoard,
  onFilterClick,
  filterCount = 0,
}: Props) {
  const { isSignedIn, user } = useUser();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isDashboardPage = pathname === "/dashboard";
  const isBoardPage = pathname.startsWith("/boards/");

  // Navigation links for non-board/dashboard pages
  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#resources", label: "Resources" },
    { href: "#support", label: "Support" },
  ];

  if (isBoardPage) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4 min-w-0">
              <Link
                href="/dashboard"
                className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors flex-shrink-0"
              >
                <ArrowLeft className="h-5 w-5" />
                <span className="hidden sm:inline">Back to dashboard</span>
                <span className="sm:hidden">Back</span>
              </Link>
              <div className="h-6 w-px bg-gray-300 hidden sm:block" />
              <div className="flex items-center space-x-2 min-w-0">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                </div>
                <div className="flex items-center space-x-2 min-w-0">
                  <span className="text-lg font-bold text-foreground truncate">
                    {boardTitle}
                  </span>
                  {onEditBoard && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-7 w-7 flex-shrink-0 p-0"
                      onClick={onEditBoard}
                    >
                      <MoreHorizontal />
                    </Button>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4 flex-shrink-0">
              {onFilterClick && (
                <Button
                  variant="outline"
                  size="sm"
                  className={`text-xs sm:text-sm ${
                    filterCount > 0 ? "bg-blue-100 border-blue-200" : ""
                  }`}
                  onClick={onFilterClick}
                >
                  <Filter className="h-3 w-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">Filter</span>
                  {filterCount > 0 && (
                    <Badge
                      variant="secondary"
                      className="text-xs ml-1 sm:ml-2 bg-blue-100 border-blue-200"
                    >
                      {filterCount}
                    </Badge>
                  )}
                </Button>
              )}
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <span className="text-xl font-bold text-foreground">
              ProjectBoard
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {!isDashboardPage &&
              navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            {isSignedIn ? (
              <>
                <span className="text-sm text-muted-foreground">
                  Welcome,{" "}
                  {user.firstName ?? user.emailAddresses[0].emailAddress}
                </span>
                <Link href="/dashboard">
                  <Button size="sm" className="text-sm">
                    Go to Dashboard <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <UserButton />
              </>
            ) : (
              <>
                <SignInButton>
                  <Button variant="ghost" size="sm" className="text-sm">
                    Sign In
                  </Button>
                </SignInButton>
                <SignUpButton>
                  <Button size="sm" className="text-sm">
                    Sign Up
                  </Button>
                </SignUpButton>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {!isDashboardPage &&
                navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-foreground hover:text-primary transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                {isSignedIn ? (
                  <>
                    <span className="text-sm text-muted-foreground py-2">
                      Welcome,{" "}
                      {user.firstName ?? user.emailAddresses[0].emailAddress}
                    </span>
                    <Link href="/dashboard">
                      <Button size="sm" className="justify-start text-sm">
                        Go to Dashboard <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <UserButton />
                  </>
                ) : (
                  <>
                    <SignInButton>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="justify-start text-sm"
                      >
                        Sign In
                      </Button>
                    </SignInButton>
                    <SignUpButton>
                      <Button size="sm" className="justify-start text-sm">
                        Sign Up
                      </Button>
                    </SignUpButton>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
