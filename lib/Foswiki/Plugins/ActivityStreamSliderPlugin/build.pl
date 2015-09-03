#!/usr/bin/perl -w
# Standard preamble
use strict;
BEGIN { unshift @INC, split( /:/, $ENV{FOSWIKI_LIBS} ); }
use Foswiki::Contrib::Build;

package ActivityStreamSliderPluginBuild;
our @ISA = qw(Foswiki::Contrib::Build);

sub new {
  my $class = shift;
  return bless( $class->SUPER::new( "ActivityStreamSliderPlugin" ), $class );
}

sub target_compress {
  my $this = shift;

  local $| = 1;

  $this->_installDeps();

  print "Building...\n";
  print $this->sys_action( qw(grunt) );
  print "\nDone!\n\n";

  print "Uglifying...\n";
  print $this->sys_action( qw(grunt uglify) );
  print "\nDone!\n\n";

  print "GZipping...\n";
  foreach my $file ( @{ $this->{files} } ) {
    next unless $file->{name} =~ m/(?:css|js)\.gz$/;
    print "error compressing $file->{name}\n" unless $this->_build_gz( $this->{basedir} . '/' . $file->{name} );
  }
  print "\nDone!\n\n";
}

sub _installDeps {
  my $this = shift;

  print "Fetching bower dependencies:\n";
  print $this->sys_action( qw(bower install) );
  print "\nDone!\n\n";

  print "Fetching node dependencies:\n";
  print $this->sys_action( qw(npm install) );
  print "\nDone!\n\n";

}

# XXX Copy/Paste BuildContrib/lib/Foswiki/Contrib/BuildContrib/Targets/compress.pm
sub _needsBuilding {
    my ( $from, $to ) = @_;

    if ( -e $to ) {
        my @fstat = stat($from);
        my @tstat = stat($to);
        return 0 if ( $tstat[9] >= $fstat[9] );
    }
    return 1;
}

# XXX Copy/Paste BuildContrib/lib/Foswiki/Contrib/BuildContrib/Targets/compress.pm
# Uses Compress::Zlib to gzip files
#
#   * xxx.yyy -> xxx.yyy.gz
#

sub _build_gz {
    my ( $this, $to ) = @_;

    unless ( eval { require Compress::Zlib } ) {
        warn "Cannot gzip: $@\n";
        return 0;
    }

    my $from = $to;
    $from =~ s/\.gz$// or return 0;
    return 0 unless -e $from && _needsBuilding( $from, $to );

    if ( -l $to ) {

        # BuildContrib will always override links created by pseudo-install
        unlink($to);
    }

    my $f;
    open( $f, '<', $from ) || die $!;
    local $/ = undef;
    my $text = <$f>;
    close($f);

    $text = Compress::Zlib::memGzip($text);

    unless ( $this->{-n} ) {
        my $f;
        open( $f, '>', $to ) || die "$to: $!";
        binmode $f;
        print $f $text;
        close($f);
        warn "Generated $to from $from\n";
    }
    return 1;
}

package main;
my $build = ActivityStreamSliderPluginBuild->new('ActivityStreamSliderPlugin');
$build->build( $build->{target} );

